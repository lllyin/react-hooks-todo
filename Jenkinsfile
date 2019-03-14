pipeline {
    agent { docker 'node:8.12' }
    stages {
        stage('echo') { 
            steps {
                sh 'pwd' 
                sh 'echo $WORKSPACE'
            }
        }
        stage('compress') { 
            steps {
                sh 'tar -zcvf src.tar.gz ./src' 
            }
        }
        stage('copy') { 
            steps {
                sh 'cp ./src.tar.gz ./src2.tar.gz' 
            }
        }
         stage('docker-copy') { 
            steps {
                sh 'docker cp jenkins_node3:$WORKSPACE"/src.tar.gz" /Users/ling/Documents/src.tar.gz' 
            }
        }
        stage('cat') { 
            steps {
                sh 'cat ./package.json' 
            }
        }
    }
}