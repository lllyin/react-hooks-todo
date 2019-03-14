pipeline {
    agent { docker 'node:8.12' }
    environment {
       NGINX_HOME = '/Users/ling/nginx/html'
   }
    stages {
        stage('prepare') { 
            steps {
                sh 'echo $WORKSPACE'
                sh 'tar -zcvf node_modules.tar.gz $NGINX_HOME"/node_tools/react-hooks-todo_cd-docker/node_modules"'
                sh 'cp  $NGINX_HOME"/node_tools/react-hooks-todo_cd-docker/node_modules.tar.gz" ./'
                sh 'tar -zxcvf ./node_modules.tar.gz'
            }
        }
        stage('build') { 
            steps {
                sh 'npm run build' 
            }
        }
        stage('deploy') { 
            steps {
                sh 'tar -zcvf build.tar.zip ./build'
                sh 'rm -rf $NGINX_HOME"/react-hooks-todo" && mkdir $NGINX_HOME"/react-hooks-todo"'
                sh 'cp ./build.tar.zip $NGINX_HOME"/react-hooks-todo"' 
            }
        }
    }
}