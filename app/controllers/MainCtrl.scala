package controllers

import play.api._
import play.api.mvc._




class MainCtrl extends Controller {

  def root = Action { request =>
    val file = new java.io.File("./public/index-dev.html")
    Ok.sendFile(file).as(HTML)
  }

  def referencesAdd = Action(parse.json) { request =>
    val reqBody = request.body
    val text = reqBody.\("text")
    val leaf = reqBody.\("leaf")
    val path = reqBody.\("path")
    println(leaf)
    println(text)
    println(path)
    Ok("ok")
  }

}




