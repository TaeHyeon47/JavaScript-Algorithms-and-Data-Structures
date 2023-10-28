/////////////////////////////////////////
//? 단일 연결 리스트 (Singly Linked Lists)

// Objectives
// ● Define what a Singly Linked List is.
// ● Compare and contrast Linked Lists with Arrays.
// ● Implement insertion, removal and traversal methods on Singly Linked Lists.

//* What is a linked list?
// ● 각각의 Element를 "노드"라고 부른다.
// ● A data structure that contains a head, tail and length property.
// ● 'head'는 연결 리스트의 시작 노드를 의미. 'tail'은 연결 리스트의 마지막 노드를 의미. 작업을 용이하게 하기 위해 'length'를 계속 유지 (강의 110 2분 50초 그림 참조)
// ● Linked Lists consist of nodes, and each node has a value and a pointer to another node or null.
// ● pointer : 다음 노드를 가리키는 정보 저장. 다음 노드가 없을 경우 'null'를 입력.
// ● 헤드 노드가 어디 있는지만 알고 있을 것이며, 이 헤드 노드로부터 두번째 노드를 알아내고, 두 번째 노드에서 세 번째 노드를 알아내는 식으로 마지막 노드까지 접근.
// ● Array의 경우 인덱스(색인)이 부여된다. 반면, 연결 리스트는 다음 데이터를 가리키는 인덱스 없이 그냥 다수의 데이터 엘리먼트로만 구성된다.
//* ● Linked List는 마치 객차들이 연속으로 연결되어 있는 기차와 같다. 하지만 데이터에 접근하기 위한 인덱스는 없다.
// 사이트 참고 : https://visualgo.net/en/list

// Comparisons with Arrays

// Lists
// ● Do not have indexes!
// ● Connected via nodes with a next pointer
// ● Random access is not allowed

// Arrays
// ● Indexed in order!
// ● Insertion and deletion can be expensive
// ● Can quickly be accessed at a specific index

// Array의 경우 새로운 데이터를 중간에 추가하면 인덱스가 밀리는 물결 효과를 감수해야한다.
