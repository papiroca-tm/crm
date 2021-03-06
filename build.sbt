name := """crm"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test,
  "org.mongodb" %% "casbah" % "3.1.1"
)
//resolvers += "Sonatype releases" at "https://oss.sonatype.org/content/repositories/releases"
//resolvers += "Sonatype snapshots" at "https://oss.sonatype.org/content/repositories/snapshots"