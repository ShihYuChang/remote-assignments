function calculate(numList) {
  if (numList.op === "+") {
    result = numList.n1 + numList.n2;
    return result;
  } else if (numList.op === "-") {
    result = numList.n1 - numList.n2;
    return result;
  } else {
    let errorMsg = "Not supported";
    return errorMsg;
  }
}
