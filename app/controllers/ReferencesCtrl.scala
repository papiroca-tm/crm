package controllers

import play.api.mvc._

class ReferencesCtrl extends Controller {

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

  def getRefTree = Action { request =>
    Ok("[{\"id\":\"oit\",\"text\":\"Отдел разработки\",\"children\":[" +
      "{\"id\":\"js\",\"text\":\"JavaScript\",\"leaf\":true},{\"id\":\"cs\",\"text\":\"CoffeeScript\",\"leaf\":true}" +
      "]}]").as(JSON)
  }

}
