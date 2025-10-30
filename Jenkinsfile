pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/manar103/hyummy-.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build and Deploy') {
            steps {
                sh 'npm run deploy'
            }
        }
    }
}
