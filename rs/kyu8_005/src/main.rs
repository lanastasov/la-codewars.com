// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/rust

fn main() {
    println!("{:?}",rental_car_cost(8));
}
fn rental_car_cost(d: u32) -> u32 {
    let daily_rate = 40;
    let base_cost  = d * daily_rate;
    
    let discount = match d {
        7..=u32::MAX => 50,
        3..=6 => 20,
        _ => 0,
    };
    
    base_cost - discount
}