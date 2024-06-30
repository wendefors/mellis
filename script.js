{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('spin-button').addEventListener('click', () => \{\
    const wheel = document.getElementById('wheel');\
    const degrees = Math.floor(Math.random() * 360);\
    wheel.style.transform = `rotate($\{degrees\}deg)`;\
\
    setTimeout(() => \{\
        const selectedSnack = Math.floor(degrees / (360 / 5)) + 1;\
        document.getElementById('snack-image').src = `images/mellis$\{selectedSnack\}.jpg`;\
        document.getElementById('popup').classList.remove('hidden');\
    \}, 2000);\
\});\
\
document.getElementById('popup').addEventListener('click', () => \{\
    document.getElementById('popup').classList.add('hidden');\
\});}