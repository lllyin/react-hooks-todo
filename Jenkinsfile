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
                sh 'cp $NGINX_HOME"/node_tools/react-hooks-todo_cd-docker/node_modules.tar" ./'
                sh 'tar -xvf ./node_modules.tar'
            }
        }
        stage('build') { 
            steps {
                sh 'npm run build' 
            }
        }
        stage('deploy') { 
            steps {
                sh 'tar -cvf build.tar ./build'
                sh 'rm -rf $NGINX_HOME"/react-hooks-todo" && mkdir $NGINX_HOME"/react-hooks-todo"'
                sh 'cp ./build.tar $NGINX_HOME"/react-hooks-todo"' 
                sh 'tar -xvf $NGINX_HOME"/react-hooks-todo/build.tar"'
            }
        }
    }
}