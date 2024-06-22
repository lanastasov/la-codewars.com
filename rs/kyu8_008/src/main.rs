// https://www.codewars.com/kata/57bfea4cb19505912900012c/train/rust

fn main() {
    println!("{:?}", symmetric_point([0, 0], [1, 1]));
    // expected  -> [2, 2]
}

fn symmetric_point(p: [i32; 2], q: [i32; 2]) -> [i32; 2] {
    [q[0] - p[0] + q[0], q[1] - p[1] + q[1]]
}