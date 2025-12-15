QUESTIONS = [

  // Q1 (MCQ)
  {
    "question": "Which type of operating system allows multiple users to interact with the system simultaneously?",
    "options": {
      "A": "Batch operating system",
      "B": "Time-sharing operating system",
      "C": "Real-time operating system",
      "D": "Single-user operating system"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q2 (FILL)
  {
    "question": "An operating system that responds to user requests within a short time interval is called a __________ operating system.",
    "answer": "Time-sharing",
    "type": "fill"
  },

  // Q3 (MCQ)
  {
    "question": "Which operating system is designed to meet strict timing constraints?",
    "options": {
      "A": "Batch OS",
      "B": "Distributed OS",
      "C": "Real-time OS",
      "D": "Network OS"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q4 (FILL)
  {
    "question": "A system where correctness depends on both logical results and timing constraints is known as a __________ system.",
    "answer": "Real-time",
    "type": "fill"
  },

  // Q5 (MCQ)
  {
    "question": "Which of the following is an advantage of time-sharing operating systems?",
    "options": {
      "A": "Low response time",
      "B": "Single user access",
      "C": "No CPU scheduling",
      "D": "Offline processing"
    },
    "answer": "A",
    "type": "mcq"
  },

  // Q6 (FILL)
  {
    "question": "Time-sharing operating systems improve __________ by allowing quick interaction with users.",
    "answer": "Response time",
    "type": "fill"
  },

  // Q7 (MCQ)
  {
    "question": "Which operating system structure organizes the system as a collection of objects?",
    "options": {
      "A": "Layered OS",
      "B": "Distributed OS",
      "C": "Object-oriented OS",
      "D": "Batch OS"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q8 (FILL)
  {
    "question": "An operating system that encapsulates data and operations into objects is known as an __________ operating system.",
    "answer": "Object-oriented",
    "type": "fill"
  },

  // Q9 (MCQ)
  {
    "question": "A program in execution is referred to as a __________.",
    "options": {
      "A": "Thread",
      "B": "Process",
      "C": "Job",
      "D": "Task manager"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q10 (FILL)
  {
    "question": "A __________ is an instance of a program that is currently executing.",
    "answer": "Process",
    "type": "fill"
  },

  // Q11 (MCQ)
  {
    "question": "Which of the following is NOT a valid process state?",
    "options": {
      "A": "Ready",
      "B": "Running",
      "C": "Waiting",
      "D": "Compiled"
    },
    "answer": "D",
    "type": "mcq"
  },

  // Q12 (FILL)
  {
    "question": "A process that is waiting for an I/O operation is in the __________ state.",
    "answer": "Waiting",
    "type": "fill"
  },

  // Q13 (MCQ)
  {
    "question": "Which component of the operating system selects the next process to execute?",
    "options": {
      "A": "Dispatcher",
      "B": "Scheduler",
      "C": "Loader",
      "D": "Assembler"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q14 (FILL)
  {
    "question": "The CPU scheduler decides which process should run __________.",
    "answer": "Next",
    "type": "fill"
  },

  // Q15 (MCQ)
  {
    "question": "Which CPU scheduling algorithm allocates equal CPU time to all processes?",
    "options": {
      "A": "First Come First Served",
      "B": "Shortest Job First",
      "C": "Round Robin",
      "D": "Priority scheduling"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q16 (FILL)
  {
    "question": "The Round Robin scheduling algorithm uses a fixed __________ for each process.",
    "answer": "Time quantum",
    "type": "fill"
  },

  // Q17 (MCQ)
  {
    "question": "Which scheduling algorithm may lead to starvation?",
    "options": {
      "A": "FCFS",
      "B": "Round Robin",
      "C": "Priority scheduling",
      "D": "FIFO"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q18 (FILL)
  {
    "question": "Starvation occurs when a process is indefinitely denied __________ time.",
    "answer": "CPU",
    "type": "fill"
  },

  // Q19 (MCQ)
  {
    "question": "Which problem occurs when multiple processes access shared data concurrently?",
    "options": {
      "A": "Deadlock",
      "B": "Starvation",
      "C": "Race condition",
      "D": "Thrashing"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q20 (FILL)
  {
    "question": "A __________ condition arises when the outcome depends on the order of execution of processes.",
    "answer": "Race",
    "type": "fill"
  },

  // Q21 (MCQ)
  {
    "question": "Which mechanism ensures that only one process enters the critical section at a time?",
    "options": {
      "A": "Deadlock",
      "B": "Mutual exclusion",
      "C": "Paging",
      "D": "Scheduling"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q22 (FILL)
  {
    "question": "Mutual __________ prevents simultaneous access to shared resources.",
    "answer": "Exclusion",
    "type": "fill"
  },

  // Q23 (MCQ)
  {
    "question": "Which of the following is a classic synchronization problem?",
    "options": {
      "A": "Dining philosophers",
      "B": "Banker’s algorithm",
      "C": "Paging",
      "D": "Spooling"
    },
    "answer": "A",
    "type": "mcq"
  },

  // Q24 (FILL)
  {
    "question": "The __________ philosophers problem illustrates issues of synchronization and deadlock.",
    "answer": "Dining",
    "type": "fill"
  },

  // Q25 (MCQ)
  {
    "question": "Which of the following conditions is necessary for deadlock to occur?",
    "options": {
      "A": "Mutual exclusion",
      "B": "Hold and wait",
      "C": "Circular wait",
      "D": "All of the above"
    },
    "answer": "D",
    "type": "mcq"
  },

  // Q26 (FILL)
  {
    "question": "Deadlock can be characterized by __________ necessary conditions.",
    "answer": "Four",
    "type": "fill"
  },

  // Q27 (MCQ)
  {
    "question": "Which algorithm is used to avoid deadlock?",
    "options": {
      "A": "Round Robin",
      "B": "Banker’s algorithm",
      "C": "FCFS",
      "D": "FIFO"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q28 (FILL)
  {
    "question": "Banker’s algorithm avoids deadlock by ensuring the system remains in a __________ state.",
    "answer": "Safe",
    "type": "fill"
  },

  // Q29 (MCQ)
  {
    "question": "Which of the following is NOT a method for handling deadlocks?",
    "options": {
      "A": "Deadlock prevention",
      "B": "Deadlock avoidance",
      "C": "Deadlock detection",
      "D": "Deadlock acceleration"
    },
    "answer": "D",
    "type": "mcq"
  },

  // Q30 (FILL)
  {
    "question": "Deadlock __________ involves allowing the system to enter deadlock and then recovering.",
    "answer": "Detection",
    "type": "fill"
  },

  // Q31 (MCQ)
  {
    "question": "Which memory management technique divides memory into fixed-size pages?",
    "options": {
      "A": "Segmentation",
      "B": "Paging",
      "C": "Swapping",
      "D": "Partitioning"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q32 (FILL)
  {
    "question": "In paging, physical memory is divided into frames while logical memory is divided into __________.",
    "answer": "Pages",
    "type": "fill"
  },

  // Q33 (MCQ)
  {
    "question": "Which memory management technique may suffer from external fragmentation?",
    "options": {
      "A": "Paging",
      "B": "Segmentation",
      "C": "Virtual memory",
      "D": "Caching"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q34 (FILL)
  {
    "question": "Segmentation divides memory based on logical __________ of a program.",
    "answer": "Units",
    "type": "fill"
  },

  // Q35 (MCQ)
  {
    "question": "Which of the following eliminates external fragmentation?",
    "options": {
      "A": "Segmentation",
      "B": "Paging",
      "C": "Swapping",
      "D": "Partitioning"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q36 (FILL)
  {
    "question": "Paging eliminates __________ fragmentation.",
    "answer": "External",
    "type": "fill"
  },

  // Q37 (MCQ)
  {
    "question": "Virtual memory allows execution of processes larger than __________ memory.",
    "options": {
      "A": "Cache",
      "B": "Secondary",
      "C": "Physical",
      "D": "Virtual"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q38 (FILL)
  {
    "question": "Virtual memory is implemented using paging and __________.",
    "answer": "Swapping",
    "type": "fill"
  },

  // Q39 (MCQ)
  {
    "question": "Which memory allocation technique allocates memory in contiguous blocks?",
    "options": {
      "A": "Paging",
      "B": "Segmentation",
      "C": "Contiguous allocation",
      "D": "Virtual memory"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q40 (FILL)
  {
    "question": "In contiguous allocation, each process occupies a single __________ block of memory.",
    "answer": "Continuous",
    "type": "fill"
  },

  // Q41 (MCQ)
  {
    "question": "Which memory allocation strategy assigns the first available memory block that is large enough?",
    "options": {
      "A": "Best fit",
      "B": "Worst fit",
      "C": "First fit",
      "D": "Next fit"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q42 (FILL)
  {
    "question": "The __________ fit strategy selects the first block that satisfies the memory request.",
    "answer": "First",
    "type": "fill"
  },

  // Q43 (MCQ)
  {
    "question": "Which memory allocation strategy minimizes leftover memory space?",
    "options": {
      "A": "Worst fit",
      "B": "Best fit",
      "C": "First fit",
      "D": "Next fit"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q44 (FILL)
  {
    "question": "The best fit strategy selects the __________ available block.",
    "answer": "Smallest",
    "type": "fill"
  },

  // Q45 (MCQ)
  {
    "question": "Which phenomenon occurs when a system spends more time paging than executing processes?",
    "options": {
      "A": "Deadlock",
      "B": "Starvation",
      "C": "Thrashing",
      "D": "Fragmentation"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q46 (FILL)
  {
    "question": "Thrashing leads to severe degradation of system __________.",
    "answer": "Performance",
    "type": "fill"
  },

  // Q47 (MCQ)
  {
    "question": "Which of the following is a benefit of virtual memory?",
    "options": {
      "A": "Larger program execution",
      "B": "Better memory utilization",
      "C": "Increased multiprogramming",
      "D": "All of the above"
    },
    "answer": "D",
    "type": "mcq"
  },

  // Q48 (FILL)
  {
    "question": "Virtual memory improves memory __________ and system flexibility.",
    "answer": "Utilization",
    "type": "fill"
  },

  // Q49 (MCQ)
  {
    "question": "Which structure keeps track of free and allocated memory blocks?",
    "options": {
      "A": "Process control block",
      "B": "Memory map",
      "C": "File descriptor",
      "D": "Interrupt table"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q50 (FILL)
  {
    "question": "The memory __________ maintains information about allocated and free memory regions.",
    "answer": "Map",
    "type": "fill"
  },

  {
    "question": "Which operating system feature allows multiple programs to be resident in memory at the same time?",
    "options": {
      "A": "Multitasking",
      "B": "Multiprogramming",
      "C": "Multiprocessing",
      "D": "Multithreading"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q52 (FILL)
  {
    "question": "Multiprogramming improves CPU __________ by keeping the processor busy.",
    "answer": "Utilization",
    "type": "fill"
  },

  // Q53 (MCQ)
  {
    "question": "Which of the following best describes a thread?",
    "options": {
      "A": "A program stored on disk",
      "B": "A lightweight process",
      "C": "A CPU scheduling algorithm",
      "D": "A memory block"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q54 (FILL)
  {
    "question": "Threads within the same process share the same address __________.",
    "answer": "Space",
    "type": "fill"
  },

  // Q55 (MCQ)
  {
    "question": "Which of the following is an advantage of multithreading?",
    "options": {
      "A": "Reduced context switching",
      "B": "Improved responsiveness",
      "C": "Increased memory usage",
      "D": "Simpler scheduling"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q56 (FILL)
  {
    "question": "Multithreading improves application __________ and throughput.",
    "answer": "Responsiveness",
    "type": "fill"
  },

  // Q57 (MCQ)
  {
    "question": "Which CPU scheduling criterion measures the time a process spends waiting in the ready queue?",
    "options": {
      "A": "Turnaround time",
      "B": "Response time",
      "C": "Waiting time",
      "D": "Throughput"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q58 (FILL)
  {
    "question": "The total time from process submission to completion is called __________ time.",
    "answer": "Turnaround",
    "type": "fill"
  },

  // Q59 (MCQ)
  {
    "question": "Which scheduling algorithm selects the process with the smallest execution time?",
    "options": {
      "A": "FCFS",
      "B": "Round Robin",
      "C": "Shortest Job First",
      "D": "Priority scheduling"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q60 (FILL)
  {
    "question": "Shortest Job First scheduling minimizes average __________ time.",
    "answer": "Waiting",
    "type": "fill"
  },

  // Q61 (MCQ)
  {
    "question": "Which of the following problems is associated with Shortest Job First scheduling?",
    "options": {
      "A": "Deadlock",
      "B": "Starvation",
      "C": "Thrashing",
      "D": "Fragmentation"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q62 (FILL)
  {
    "question": "Starvation can be reduced by using __________ techniques.",
    "answer": "Aging",
    "type": "fill"
  },

  // Q63 (MCQ)
  {
    "question": "Which of the following synchronization tools is used to control access to shared resources?",
    "options": {
      "A": "Semaphore",
      "B": "Scheduler",
      "C": "Swapper",
      "D": "Pager"
    },
    "answer": "A",
    "type": "mcq"
  },

  // Q64 (FILL)
  {
    "question": "A semaphore is a synchronization __________ used to control access to shared resources.",
    "answer": "Variable",
    "type": "fill"
  },

  // Q65 (MCQ)
  {
    "question": "Which of the following ensures progress in the critical section problem?",
    "options": {
      "A": "Mutual exclusion",
      "B": "Bounded waiting",
      "C": "Progress",
      "D": "All of the above"
    },
    "answer": "D",
    "type": "mcq"
  },

  // Q66 (FILL)
  {
    "question": "Bounded waiting ensures that no process waits __________ for entry into the critical section.",
    "answer": "Indefinitely",
    "type": "fill"
  },

  // Q67 (MCQ)
  {
    "question": "Which of the following is NOT a classic synchronization problem?",
    "options": {
      "A": "Dining philosophers",
      "B": "Producer-consumer",
      "C": "Readers-writers",
      "D": "Page replacement"
    },
    "answer": "D",
    "type": "mcq"
  },

  // Q68 (FILL)
  {
    "question": "The producer-consumer problem involves synchronization between producing and __________ processes.",
    "answer": "Consuming",
    "type": "fill"
  },

  // Q69 (MCQ)
  {
    "question": "Which condition must hold for a deadlock to occur?",
    "options": {
      "A": "Mutual exclusion",
      "B": "Hold and wait",
      "C": "No preemption",
      "D": "All of the above"
    },
    "answer": "D",
    "type": "mcq"
  },

  // Q70 (FILL)
  {
    "question": "Circular __________ is one of the necessary conditions for deadlock.",
    "answer": "Wait",
    "type": "fill"
  },

  // Q71 (MCQ)
  {
    "question": "Which approach allows the system to enter deadlock and then recover?",
    "options": {
      "A": "Deadlock prevention",
      "B": "Deadlock avoidance",
      "C": "Deadlock detection and recovery",
      "D": "Deadlock elimination"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q72 (FILL)
  {
    "question": "Deadlock recovery may involve preempting resources or terminating __________.",
    "answer": "Processes",
    "type": "fill"
  },

  // Q73 (MCQ)
  {
    "question": "Which memory management scheme allows non-contiguous allocation?",
    "options": {
      "A": "Contiguous allocation",
      "B": "Paging",
      "C": "Fixed partitioning",
      "D": "Single partitioning"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q74 (FILL)
  {
    "question": "Paging avoids the problem of __________ fragmentation.",
    "answer": "External",
    "type": "fill"
  },

  // Q75 (MCQ)
  {
    "question": "Which of the following is a disadvantage of paging?",
    "options": {
      "A": "Internal fragmentation",
      "B": "External fragmentation",
      "C": "Complex memory allocation",
      "D": "No hardware support"
    },
    "answer": "A",
    "type": "mcq"
  },

  // Q76 (FILL)
  {
    "question": "Internal fragmentation occurs when allocated memory is slightly __________ than required.",
    "answer": "Larger",
    "type": "fill"
  },

  // Q77 (MCQ)
  {
    "question": "Which memory management technique uses variable-sized segments?",
    "options": {
      "A": "Paging",
      "B": "Segmentation",
      "C": "Swapping",
      "D": "Caching"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q78 (FILL)
  {
    "question": "Segmentation supports the user’s view of memory as a collection of logical __________.",
    "answer": "Segments",
    "type": "fill"
  },

  // Q79 (MCQ)
  {
    "question": "Which component translates logical addresses to physical addresses?",
    "options": {
      "A": "CPU",
      "B": "Memory Management Unit",
      "C": "Cache controller",
      "D": "Disk controller"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q80 (FILL)
  {
    "question": "The MMU stands for Memory __________ Unit.",
    "answer": "Management",
    "type": "fill"
  },

  // Q81 (MCQ)
  {
    "question": "Which technique temporarily moves processes from main memory to secondary storage?",
    "options": {
      "A": "Paging",
      "B": "Swapping",
      "C": "Segmentation",
      "D": "Caching"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q82 (FILL)
  {
    "question": "Swapping transfers processes between main memory and __________ storage.",
    "answer": "Secondary",
    "type": "fill"
  },

  // Q83 (MCQ)
  {
    "question": "Which of the following helps reduce thrashing?",
    "options": {
      "A": "Increasing degree of multiprogramming",
      "B": "Reducing memory frames",
      "C": "Working set model",
      "D": "Disabling paging"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q84 (FILL)
  {
    "question": "The working set model keeps track of the pages a process is __________ using.",
    "answer": "Actively",
    "type": "fill"
  },

  // Q85 (MCQ)
  {
    "question": "Which page replacement algorithm replaces the page that will not be used for the longest time?",
    "options": {
      "A": "FIFO",
      "B": "LRU",
      "C": "Optimal",
      "D": "Clock"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q86 (FILL)
  {
    "question": "The optimal page replacement algorithm provides the __________ possible page fault rate.",
    "answer": "Lowest",
    "type": "fill"
  },

  // Q87 (MCQ)
  {
    "question": "Which phenomenon occurs when frequent page faults drastically reduce system performance?",
    "options": {
      "A": "Deadlock",
      "B": "Starvation",
      "C": "Thrashing",
      "D": "Fragmentation"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q88 (FILL)
  {
    "question": "Thrashing occurs when the system spends more time __________ than executing processes.",
    "answer": "Paging",
    "type": "fill"
  },

  // Q89 (MCQ)
  {
    "question": "Which of the following is an advantage of virtual memory?",
    "options": {
      "A": "Programs can be larger than physical memory",
      "B": "Better memory utilization",
      "C": "Increased multiprogramming",
      "D": "All of the above"
    },
    "answer": "D",
    "type": "mcq"
  },

  // Q90 (FILL)
  {
    "question": "Virtual memory allows efficient use of __________ memory.",
    "answer": "Physical",
    "type": "fill"
  },

  // Q91 (MCQ)
  {
    "question": "Which data structure keeps track of the state of each process?",
    "options": {
      "A": "Page table",
      "B": "File descriptor",
      "C": "Process Control Block",
      "D": "Interrupt vector"
    },
    "answer": "C",
    "type": "mcq"
  },

  // Q92 (FILL)
  {
    "question": "The Process Control Block stores information such as process state and __________ registers.",
    "answer": "CPU",
    "type": "fill"
  },

  // Q93 (MCQ)
  {
    "question": "Which of the following is NOT stored in a Process Control Block?",
    "options": {
      "A": "Process state",
      "B": "Program counter",
      "C": "CPU registers",
      "D": "Page replacement algorithm"
    },
    "answer": "D",
    "type": "mcq"
  },

  // Q94 (FILL)
  {
    "question": "The program __________ indicates the address of the next instruction to execute.",
    "answer": "Counter",
    "type": "fill"
  },

  // Q95 (MCQ)
  {
    "question": "Which mechanism allows multiple processes to safely share a single CPU?",
    "options": {
      "A": "Interrupts",
      "B": "Context switching",
      "C": "Polling",
      "D": "Spooling"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q96 (FILL)
  {
    "question": "Context switching involves saving and restoring the __________ of processes.",
    "answer": "State",
    "type": "fill"
  },

  // Q97 (MCQ)
  {
    "question": "Which of the following ensures fairness in CPU scheduling?",
    "options": {
      "A": "FCFS",
      "B": "Round Robin",
      "C": "SJF",
      "D": "Priority scheduling"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q98 (FILL)
  {
    "question": "Round Robin scheduling improves fairness by assigning equal __________ to processes.",
    "answer": "Time",
    "type": "fill"
  },

  // Q99 (MCQ)
  {
    "question": "Which of the following statements about deadlock prevention is correct?",
    "options": {
      "A": "It allows circular wait",
      "B": "It eliminates one of the necessary conditions",
      "C": "It detects deadlock after it occurs",
      "D": "It ignores deadlock"
    },
    "answer": "B",
    "type": "mcq"
  },

  // Q100 (FILL)
  {
    "question": "Deadlock prevention works by eliminating at least one __________ condition.",
    "answer": "Necessary",
    "type": "fill"
  }


];
