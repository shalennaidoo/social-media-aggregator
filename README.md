# Social Media Aggregator

A serverless social media aggregator web application that fetches tweets using the Twitter API and displays them on a beautifully designed React frontend. 
This app is deployed on AWS using a variety of services including AWS Amplify, Lambda, API Gateway, DynamoDB, and S3.

![Social Media Aggregator Screenshot](./screenshot.png)

## Features

- Fetches tweets using the Twitter API
- Serverless backend using AWS Lambda and API Gateway
- Data storage with AWS DynamoDB
- React frontend deployed using AWS Amplify
- Fully automated infrastructure setup using AWS CloudFormation

## Getting Started

### Prerequisites

- AWS Account
- Twitter Developer Account with API keys and access tokens
- Node.js and npm installed on your local machine
- Git and GitHub account

### Deployment

1. Clone this repository:


2. Create a CloudFormation stack using the provided template file:

- Log in to the AWS Management Console.
- Navigate to the CloudFormation service.
- Create a new stack with the provided `social-media-aggregator.yaml` template.
- Fill in the required parameters, including your Twitter API keys and access tokens.

3. Wait for the CloudFormation stack to finish creating all the resources, and then visit the output URL to view the deployed React frontend.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [AWS Amplify](https://aws.amazon.com/amplify/) - Frontend deployment
- [AWS Lambda](https://aws.amazon.com/lambda/) - Serverless backend
- [AWS API Gateway](https://aws.amazon.com/api-gateway/) - API management
- [AWS DynamoDB](https://aws.amazon.com/dynamodb/) - Data storage
- [AWS S3](https://aws.amazon.com/s3/) - Storage service for deployment artifacts
- [AWS CloudFormation](https://aws.amazon.com/cloudformation/) - Infrastructure as Code

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/yourusername/your-contributing-guidelines-url) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to the [Twitter API](https://developer.twitter.com/en/docs) for providing tweet data.
- Inspired by the need for a simple, serverless social media aggregator.
