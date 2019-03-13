pipeline {
    agent { docker 'node:8.12' }
    stages {
        stage('install') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('build') { 
            steps {
                sh 'npm run build' 
            }
        }
    }
}