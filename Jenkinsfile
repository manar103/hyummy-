pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/manar103/hyummy-.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Configure Git and Deploy') {
            steps {
                bat 'git config user.email "me5291486@gmail.com"'
                bat 'git config user.name "manar103"'
                bat 'npm run deploy'
            }
        }
    }
}
