const head1 = {
  data: 1,
  next: { data: 2, next: { data: 4, next: null } }
};

const head2 = {
  data: 3, next: { data: 3, next: null }
};

function mergeLists(head1, head2)
{
  let dummy = { data: 0, next: null }
  let tail = dummy;

  while (head1 !== null && head2 !== null)
  {
    if (head1.data <= head2.data)
    {
      tail.next = head1;
      head1 = head1.next;
    } else
    {
      tail.next = head2;
      head2 = head2.next
    }

    tail = tail.next;
    console.log(tail);
  }

  if (head1 !== null)
  {
    tail.next = head1;
  } else
  {
    tail.next = head2;
  }

  return dummy.next;
}

mergeLists(head1, head2);
