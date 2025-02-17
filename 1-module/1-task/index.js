function factorial(n) {
        let f = 1;
        if (n == 0){
          f = 1;
        } else if (n >= 1){
        for(let i = 1; i <= n; i++)
        {
          f = f * i;
        } 
        } else {
          f = String('Введите целое числоы');
        }
        
        return f;
}






