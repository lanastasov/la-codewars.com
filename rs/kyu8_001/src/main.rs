// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/rust

fn main() {
    println!("{:?}",count_sheep(3));
}
fn count_sheep(n: u32) -> String {
    (1..=n).map(|x| format!("{} sheep...", x)).collect()
}