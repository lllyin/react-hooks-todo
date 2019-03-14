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
                sh 'tar -zcvf src.tar.tz ./src' 
            }
        }
    }
}