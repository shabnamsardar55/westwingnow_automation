# Westwingnow Automation POC

Problem Statement

![image](https://user-images.githubusercontent.com/74857236/119126822-2ae99300-ba51-11eb-90e5-0637888261c1.png)


# Build steps

Pre-requisites:
1. NodeJS version should be above than 12.16
2. Install Google chrome
3. Install Docker software

Clone repository of master branch
 
# Part 1 : Build at local : headless mode 
1. Install libraries using command "npm install"
2. Run script using command "npm run test"

# Part 2 : Build at local : chromedriver service
1. Install libraries using command "npm install"
2. Change services to chromedriver

![image](https://user-images.githubusercontent.com/74857236/119124803-b31a6900-ba4e-11eb-9f7b-6427129ed884.png)

3. comment chrome option added for headless mode
![image](https://user-images.githubusercontent.com/74857236/119125030-f1b02380-ba4e-11eb-9876-b94d67ebe90e.png)

4. Run script using command "npm run test"

# Build in docker file
1. Build docker image using command "docker build -t westwing:v1"
2. Check image has been build successfully using command "docker images"
3. Run script on image using command "docker run -it westwing:v1"

# Build using docker-compose
1. Install libraries using command "npm install"
2. Build docker using command "docker-compose up"
3. Open second terminal and run script using command "npm run test"
4. Shutdown docker infrastructure using command "docker-compose down"
 
# Reporting :

1. Console Reoprt Log : 
![image](https://user-images.githubusercontent.com/77624984/125280291-7e31e080-e332-11eb-96a7-16530ad3f51c.png)


2. Allure HTML Report : 
![image](https://user-images.githubusercontent.com/77624984/125280099-53478c80-e332-11eb-82ec-5d47cd961a0b.png)

![image](https://user-images.githubusercontent.com/77624984/125280182-678b8980-e332-11eb-818a-2670ac45ac64.png)



