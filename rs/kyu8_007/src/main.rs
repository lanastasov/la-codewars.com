// https://www.codewars.com/kata/5861d28f124b35723e00005e/solutions/rust
fn main() {
    println!("{}", zero_fuel(50, 25, 2));
}

fn zero_fuel(distance_to_pump: u32, mpg: u32, gallons: u32) -> bool {
    match mpg * gallons {
        y if y >= distance_to_pump => true,
        _ => false
    }
}