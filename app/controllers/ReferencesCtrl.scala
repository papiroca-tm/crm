package controllers

import play.api.libs.json._
import play.api.mvc._
import services.ConfigReader


class ReferencesCtrl extends Controller {

  def referencesAdd = Action(parse.json) { request =>
    Ok("ok")
  }


  def getRefTree = Action { request =>
    //todo:  работаем с mongodb
    println(ConfigReader.DB_HOST)
    println(ConfigReader.DB_HOST)
//    val mongoClient = MongoClient("localhost", 27017)

    case class RefItem(refId: Long, text: String, leaf: Boolean, children: List[RefItem])
    case class ReferencesRoot(refItems: List[RefItem])

    implicit val refItemWrites = new Writes[RefItem] {
      def writes(refItem: RefItem) = Json.obj(
        "refId" -> refItem.refId,
        "text" -> refItem.text,
        "leaf" -> refItem.leaf,
        "children" -> JsArray(refItem.children.map(ref => JsObject(List("refId" -> JsNumber(ref.refId), "text" -> JsString(ref.text), "leaf" -> JsBoolean(ref.leaf)))))
      )
    }

    implicit val refRootWrites = new Writes[ReferencesRoot] {
      def writes(refRoot: ReferencesRoot) = Json.toJson(
        refRoot.refItems
      )
    }

    val references = ReferencesRoot(
      List(
        RefItem(1, "отдел разработки", leaf = false, List(
          RefItem(11, "javaScript", leaf = true, List()),
          RefItem(12, "coffeeScript2", leaf = true, List())
        )),
        RefItem(2, "техподдержка", leaf = false, children = List())
      )
    )
    Ok(Json.toJson(references))

  }
}