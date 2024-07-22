function make_sandwich(items) {
    console.log("your items are:");
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
    console.log();
}
make_sandwich(['lettuce', 'tomato', 'turkey']);
make_sandwich(['cheese', 'ham', 'mustard', 'pickles']);
make_sandwich(['bacon', 'egg', 'avocado', 'sriracha']);
export {};
