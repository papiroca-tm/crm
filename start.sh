#!/bin/bash

set -e
activatorPath="/home/papiroca/scala-proj/activator/bin"

# подключаем nodejs к SBT что бы все компилилось и собиралось быстро
export SBT_OPTS="${SBT_OPTS} -Dsbt.jse.engineType=Node -Dsbt.jse.command=$(which nodejs)"
echo ${SBT_OPTS}

# в переменную окружения кидаем путь до активатора
if [ -s ${activatorPath} ] && [[ ":"$PATH":" != *":"${activatorPath}":"* ]]; then
    export PATH=$PATH:${activatorPath}
#    echo "activatorPath add to PATH"
#    echo $PATH
fi



echo "SELECT ACTIVATOR OPTION:"
echo "########################"
echo "1 - clean compile"
echo "2 - compile"
echo "3 - run"
echo "4 - exit launcher"
echo "########################"
read doing

case ${doing} in
    1)
    echo "execute: activator clean compile..."
    activator clean compile
    ;;
    2)
    echo "execute: activator compile..."
    activator compile
    ;;
    3)
    echo "execute: activator run..."
    activator run
    ;;
    4)
    echo "exit"
    exit 0
    ;;
    *) #если введено с клавиатуры то, что в case не описывается, выполнять следующее:
    echo "wrong option, exiting..."
    exit 0
esac