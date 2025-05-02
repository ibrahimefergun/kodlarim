#!/bin/bash

isim="efe"

if [ $isim == "efe" ]; then echo "Merhaba $isim!"
else echo "Kimsin?"
fi

isim() {
    echo "Merhaba, $1!"
}

isim "Efe"

if ls | grep -q "c"; then echo "C varr."
else echo "C yok ask."
fi