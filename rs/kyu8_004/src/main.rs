// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/rust

fn main() {
    println!("{}",abbrev_name("John Doe"));
}

fn abbrev_name(name: &str) -> String {
    // Split the name string by spaces
    let parts: Vec<&str> = name.split_whitespace().collect();
    
    // Get the first character of each part and convert to uppercase
    let first_initial = parts[0].chars().next().unwrap().to_uppercase().to_string();
    let second_initial = parts[1].chars().next().unwrap().to_uppercase().to_string();
    
    // Combine the initials with a dot in between
    format!("{}.{}", first_initial, second_initial)
}