node{
    stage('SCM checkout'){
        git 'https://github.com/HemkantG/NodeRestService.git'
    }
    stage('Build Docker Image'){
        sh 'docker build -t hemkant0007/my-node-service:1.0.0 .'
    }
    stage('Push Docker Image'){
        withCredentials([string(credentialsId: 'docker-pwd', variable: 'dockerHubPwd')]) {
            sh "docker login -u hemkant0007 -p ${dockerHubPwd}"
        }
        sh 'docker push hemkant0007/my-node-service:1.0.0'

    }
    stage('Run the container on the dev server'){
         def dockerRun = 'docker run -p 3000:3000 --name my-node-service -d hemkant0007/my-node-service:1.0.0'
         sshagent (credentials: ['ssh-creds']) {
             sh "ssh -o StrictHostKeyChecking=no -l espladmin@192.168.101.222 ${dockerRun}"
         }
    }
}
