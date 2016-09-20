package controllers

import javax.inject._
import play.api._
import play.api.mvc._

/**
  * @author dvv.
  */


@Singleton
class MainCtrl @Inject() extends Controller {

  def root = Action {
    request =>
    val file = new java.io.File("./public/index-dev.html")
    Ok.sendFile(file).as(HTML)
  }

}
