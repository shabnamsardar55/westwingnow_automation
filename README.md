# Westwingnow Automation POC

Problem Statement

![image](https://user-images.githubusercontent.com/74857236/119126822-2ae99300-ba51-11eb-90e5-0637888261c1.png)


# Build steps

Pre-requisites:
1. NodeJS version should be above than 12.16
2. Install Google chrome
3. Install Docker software

Clone repository of master branch

https://github.com/shabnamsardar55/westwingnow_automation/tree/master
 
# Part 1 : Build at local : headless mode 
1. Install libraries using command "npm install"
2. Run script using command "npm run test"

# Part 2 : Build at local : chromedriver service
1. Install libraries using command "npm install"
2. Change services to chromedriver

>services: ['docker'],

3. comment --headless from chromeOptions

4. Run script using command "npm run test"

# Build in docker file
1. Build docker image using command "docker build -t westwing:v1"
2. Check image has been build successfully using command "docker images"
3. Run script on image using command "docker run -it westwing:v1"

# Reporting :

1. Console Reoprt Log : 

![image](https://user-images.githubusercontent.com/77624984/125280291-7e31e080-e332-11eb-96a7-16530ad3f51c.png)


2. Allure HTML Report : 

![image](https://user-images.githubusercontent.com/77624984/125280099-53478c80-e332-11eb-82ec-5d47cd961a0b.png)

![image](https://user-images.githubusercontent.com/77624984/125280182-678b8980-e332-11eb-818a-2670ac45ac64.png)



