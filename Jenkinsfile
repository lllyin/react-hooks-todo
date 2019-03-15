pipeline {
    agent none
    environment {
       NGINX_HOME = '/usr/share/nginx/html'
       HOME = '.'
   }
    stages {
        stage('prepare') { 
            steps {
                sh 'echo $WORKSPACE'
                sh 'echo $NGINX_HOME'
                sh 'npm install yarn'
                sh 'yarn install --registry=https://registry.npm.taobao.org'
            }
        }
        stage('build') { 
            steps {
                sh 'yarn run build' 
            }
        }
        stage('deploy') { 
            steps {
                sh 'tar -cvf build.tar ./build'
                sh 'rm -rf $NGINX_HOME"/react-hooks-todo" && mkdir $NGINX_HOME"/react-hooks-todo"'
                sh 'cp ./build.tar $NGINX_HOME"/react-hooks-todo"' 
                sh 'tar -xvf $NGINX_HOME"/react-hooks-todo/build.tar" -C $NGINX_HOME"/react-hooks-todo"'
            }
        }
    }
}