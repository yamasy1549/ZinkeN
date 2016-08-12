package main

import "fmt"

func main() {
    var primes [100]bool
    for n := 2; n < len(primes); n++ {
        if primes[n] { continue }
        for m := 2 * n; m < len(primes); m += n {
            primes[m] = true
        }
        fmt.Print(n, " ")
    }
}
