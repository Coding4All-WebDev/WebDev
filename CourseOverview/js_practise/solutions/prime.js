function primeno() {
    console.log(2);
    for(let i = 3; i < 101; i++) {
        let is_prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                is_prime = false;
                break;
            }
        }
        if (is_prime == true) {
            console.log(i);
        }
    }
}
primeno();