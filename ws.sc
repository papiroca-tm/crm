
    log



def log = {
  val methodName = Thread.currentThread().getStackTrace()(2).getMethodName
  val lineNumber = Thread.currentThread().getStackTrace()(2).getLineNumber
  println(methodName)
  println(lineNumber)
}

