// https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7/train/rust

fn main() {
    println!("{}", make_upper_case("Hello, world!"));
}

fn make_upper_case(s: &str) -> String {
    s.chars().map(|c| c.to_ascii_uppercase()).collect()
}