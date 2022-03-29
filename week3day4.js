class MinHeap {
    constructor(){
        this.heap = [null]
    }

    add(val) {
        this.heap.push(val);
        this.shiftUp();
    }

    shiftUp(){
        let currentIndex = this.heap.length-1;
        let parentIndex = Math.floor(currentIndex/2);
        //while parent value is bigger and current index is not 1
            //swap the values
            //set currentIndex to parentIndex
            //find parent of current index
        while (this.heap[parentIndex] > this.heap[currentIndex] && currentIndex !== 1){
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[currentIndex]
            this.heap[currentIndex] = temp

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex/2);
        }
    }

    min(){
        return this.heap.length < 2 ? null : this.heap[1]
    }

    remove(){
        //scenario 1: the heap is empty
        if(this.heap.length < 2) {
            return null
        }
        //scenario 2: there is only 1 value
        const min = this.heap[1]
        if (this.heap.length === 2) {
            this.heap.pop();
            return min;
        }
        //scenario 3: there are values left after the min is removed
        //put last value in heap to the front
        //this will set first value while simulataenously removing last value
        this.heap[1] = this.heap.pop()
        //shift value down to its proper location
        //return value of min
        this.shiftDown();
        return min;
    }

    shiftDown() {
        //take down the top value and shift it down until its in the proper place (both children are larger than it)
        //we need to keep track of the index where our shifted value is located
        let indexToShiftDown = 1;
        //track left and right children
        let leftIndex = indexToShiftDown * 2;
        //check if there is a left to look at
        while(leftIndex < this.heap.length){
            //store right index
            let rightIndex = leftIndex + 1;
            // check which is smallest:
            let indexOfSmallest = leftIndex;
            //should i replace with right index? (exists and is smaller)
            if(rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[leftIndex]){
                indexOfSmallest = rightIndex;
            }
            //see if a swap needs to happen (is parent larger than smallest child)
            if (this.heap[indexToShiftDown] <= this.heap[indexOfSmallest]){
                //this means parent is in right place and no action needs to be taken
                console.log("the value to shift down has found its home, breaking out");
                break;
            }
            //parent value is LARGER and needs to be swapped
            console.log("haven't found home yet, swapping with smaller value");
            //time to swap values
            let temp = this.heap[indexToShiftDown];
            this.heap[indexToShiftDown] = this.heap[indexOfSmallest];
            this.heap[indexOfSmallest] = temp;
            //our value we are moving has shifted, so keep track of that
            indexToShiftDown = indexOfSmallest;
            //need to reset our left
            leftIndex = indexToShiftDown * 2
        }
    }
}

const myHeap = new MinHeap();

myHeap.add(4);
myHeap.add(18);
myHeap.add(90);
myHeap.add(1);
myHeap.add(2000);
myHeap.add(3);
myHeap.add(2);
myHeap.add(17);
myHeap.add(16);
myHeap.add(18);
myHeap.add(4);
myHeap.add(2);
myHeap.add(4.8);
myHeap.add(93);
console.log(myHeap.min());
myHeap.remove();
console.log(myHeap.min());