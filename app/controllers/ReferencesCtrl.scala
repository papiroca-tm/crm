package controllers

//import com.mongodb.casbah.MongoClient
import play.api.Logger
import play.api.libs.json._
import play.api.mvc._


class ReferencesCtrl extends Controller {

  def referencesAdd = Action(parse.json) { request =>
//    val reqBody = request.body
//    val text = reqBody.("text")
//    val leaf = reqBody.("leaf")
//    val path = reqBody.("path")
    Ok("ok")
  }

  def getRefTree = Action { request =>
    Logger.debug("getRefTree")
    //todo:  работаем с mongodb
//    val mongoClient = MongoClient("localhost", 27017)
//    println(mongoClient)

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
      def writes(refRoot: ReferencesRoot) = Json.toJson(  // Json.arr( - получался массив в массиве, поэтому заменил на Json.toJson(
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

//    val myJsonStr: JsValue = Json.parse("""
//                                       [
//                                        {
//                                          "id" : "oit",
//                                          "text" : "Отдел разработки",
//                                          "children" : [
//                                            {
//                                              "id" : "js",
//                                              "text" : "JavaScript",
//                                              "leaf" : true
//                                            },
//                                            {
//                                              "id" : "cs",
//                                              "text" : "CoffeeScript",
//                                              "leaf" : true
//                                            }
//                                          ]
//                                        }
//                                       ]
//                                   """)
//    println(myJsonStr)

//    // basic types
//    val jsonString = Json.toJson("Fiver")
//    val jsonNumber = Json.toJson(4)
//    val jsonBoolean = Json.toJson(false)
//    // collections of basic types
//    val jsonArrayOfInts = Json.toJson(Seq(1, 2, 3, 4))
//    val jsonArrayOfStrings = Json.toJson(List("Fiver", "Bigwig"))
//    println(jsonString)
//    println(jsonNumber)
//    println(jsonBoolean)
//    println(jsonArrayOfInts)
//    println(jsonArrayOfStrings)


//    val json: JsValue = Json.arr(
//      Json.toJsFieldJsValueWrapper(Json.obj(
//        "refId" -> "oit",
//        "text" -> "Отдел разработки",
//        "leaf" -> false,
//        "children" -> Json.toJsFieldJsValueWrapper(Json.arr(
//          Json.toJsFieldJsValueWrapper(Json.obj(
//            "refId" -> "js",
//            "text" -> "JavaScript",
//            "leaf" -> true
//          )),
//          Json.toJsFieldJsValueWrapper(Json.obj(
//            "refId" -> "cs",
//            "text" -> "CoffeeScript",
//            "leaf" -> true
//          ))
//        ))
//      ))
//    )
//    println(json)