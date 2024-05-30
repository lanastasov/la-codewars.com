// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/rust

fn main() {
    println!("{:?}",merge_arrays(&[1,2,3,4], &[5,6,7,8]));
}

use std::collections::BTreeSet;

fn merge_arrays(arr1: &[i32], arr2: &[i32]) -> Vec<i32> {
    let mut combined = Vec::new();
    combined.extend(arr1);
    combined.extend(arr2);
    
    // Use a BTreeSet to remove duplicates and sort the elements
    let sorted_set: BTreeSet<_> = combined.into_iter().collect();
    
    // Convert the BTreeSet back to a Vec
    let result: Vec<_> = sorted_set.into_iter().collect();
    
    result
}