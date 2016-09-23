package controllers

import play.api.mvc._

class MainCtrl extends Controller {

  def root = Action { request =>
    val file = new java.io.File("./public/index-dev.html")
    Ok.sendFile(file).as(HTML)
  }

}




