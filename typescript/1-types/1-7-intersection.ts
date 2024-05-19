{
  /**
   * Intersection Types: & (and 같은 개념!) (union은 or)
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: 'jung',
    score: 1,
    employeeId: 123,
    work: () => {}
  });
}
