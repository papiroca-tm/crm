package services

import javax.inject.Inject

import play.api.{Configuration, Environment}


class AppConfig @Inject()(playConfig: Configuration) {
  val dbHost: Option[String] = playConfig.getString("mydb.host")
  val dbPort: Option[Long] = playConfig.getLong("mydb.port")
}

object ConfigReader {
  val config = new AppConfig(Configuration.load(Environment.simple()))
  def getDbHost: String = config.dbHost.getOrElse("localhost")
  def getDbPort: Long = config.dbPort.getOrElse(27017)
}