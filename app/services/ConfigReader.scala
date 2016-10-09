package services

import javax.inject.Inject

import play.api.{Configuration, Environment}


class AppConfig @Inject()(playConfig: Configuration) {
  val dbHost: Option[String] = playConfig.getString("mydb.host")
  val dbPort: Option[Long] = playConfig.getLong("mydb.port")
}

object ConfigReader {
  private val config = new AppConfig(Configuration.load(Environment.simple()))
  val DB_HOST: String = config.dbHost.getOrElse("localhost")
  val DB_PORT: Long = config.dbPort.getOrElse(27017)
}