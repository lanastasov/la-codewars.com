fn main() {
    println!("{:?}",count_sheep(3));
}
fn count_sheep(n: u32) -> String {
    (1..=n).map(|x| format!("{} sheep...", x)).collect()
}