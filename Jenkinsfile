pipeline {
    agent { 
	 dockerfile {
	        	filename 'Dockerfile'
        		args '-p 3000:3000'
			
         }  
    }
    stages {
        stage('Test') {
            steps {
                sh 'echo "Deployed"'
            }
        }
    }
}
