set path=D:\temp\portafolio
rmdir /s /q %path%
mkdir %path% 

mkdir %path%\app
mkdir %path%\resend

copy send-email\package.json %path%\resend
copy send-email\package-lock.json %path%\resend
mkdir %path%\resend\src
copy send-email\src %path%\resend\src

copy personal-portafolio\package.json %path%\app
copy personal-portafolio\package-lock.json %path%\app
mkdir %path%\app\src
copy personal-portafolio\src %path%\app\src

copy Dockerfile %path%

