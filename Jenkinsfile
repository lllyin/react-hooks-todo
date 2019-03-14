pipeline {
    agent { docker 'node:8.12' }
    environment {
       NGINX_HOME = '/usr/share/nginx/html'
   }
    stages {
        stage('prepare') { 
            steps {
                sh 'echo $WORKSPACE'
                sh 'echo $NGINX_HOME'
                sh 'cp $NGINX_HOME"/node_tools/react-hooks-todo_cd-docker/node_modules.tar.gz" ./'
                sh 'tar -zxvf ./node_modules.tar.gz'
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