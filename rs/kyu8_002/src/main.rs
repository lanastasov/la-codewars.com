// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba/rust

fn main() {
    println!("{:?}",nearest_sq(111));
}

fn nearest_sq(n: u32) -> u32 {
    let sqrt_n = (n as f64).sqrt();
    let lower = sqrt_n.floor() as u32;
    let upper = sqrt_n.ceil() as u32;

    let lower_sq = lower * lower;
    let upper_sq = upper * upper;

    if (n as i32 - lower_sq as i32).abs() < (n as i32 - upper_sq as i32).abs() {
        lower_sq
    } else {
        upper_sq
    }
}
