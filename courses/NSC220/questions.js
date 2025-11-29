const QUESTIONS = [
  {
    question: "Philosophy in nursing refers to:",
    options: {
      A: "Hospital rules",
      B: "Belief system guiding practice",
      C: "Only scientific theories",
      D: "Legal standards"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "The word 'philosophy' originated from:",
    options: {
      A: "Latin",
      B: "Arabic",
      C: "Greek",
      D: "French"
    },
    answer: "C",
    type: "mcq"
  },
  {
    question: "“Philus” and “Sophia” mean:",
    options: {
      A: "Care and love",
      B: "Wisdom and life",
      C: "Love and wisdom",
      D: "Power and knowledge"
    },
    answer: "C",
    type: "mcq"
  },

{
    question: "Orem’s theory is the ____ theory.",
    answer: "Self-care",
    type: "fill"
  },
  {
    question: "Roy’s model describes the patient as an ____ system.",
    answer: "Adaptive",
    type: "fill"
  },
  
  {
    question: "Naturalism emphasizes:",
    options: {
      A: "Scientific reasoning",
      B: "Supernatural beliefs",
      C: "Social control",
      D: "Cultural relativism"
    },
    answer: "A",
    type: "mcq"
  },
  {
    question: "Florence Nightingale’s philosophical stance emphasizes:",
    options: {
      A: "Technological care",
      B: "Environmental factors",
      C: "Medication",
      D: "Surgery"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Idealism emphasizes reality as:",
    options: {
      A: "Matter",
      B: "Based on ideas",
      C: "Nonexistent",
      D: "Physical components only"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Pragmatism determines truth based on:",
    options: {
      A: "Emotions",
      B: "Practical consequences",
      C: "Religion",
      D: "Culture"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Humanistic existentialism focuses mainly on:",
    options: {
      A: "Disease",
      B: "Machines",
      C: "Humanity",
      D: "Politics"
    },
    answer: "C",
    type: "mcq"
  },
  {
    question: "Values are formed mainly through:",
    options: {
      A: "Genetics",
      B: "Observation & experiences",
      C: "Accidents",
      D: "Government policies"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "The nurse’s value of respect for life and dignity is rooted in:",
    options: {
      A: "Law",
      B: "Religion alone",
      C: "Personal ethics",
      D: "Nursing ethics"
    },
    answer: "D",
    type: "mcq"
  },
  {
    question: "Which factor MOST hinders implementation of nursing philosophy?",
    options: {
      A: "Abundant resources",
      B: "Rapid technological changes",
      C: "Adequate staffing",
      D: "High funding"
    },
    answer: "B",
    type: "mcq"
  },
  
  {
    question: "Ethics and law interface when:",
    options: {
      A: "Ethics always greater",
      B: "Law always greater",
      C: "Some actions ethical but illegal",
      D: "Ethics absent"
    },
    answer: "C",
    type: "mcq"
  },
  {
    question: "A concept in nursing refers to:",
    options: {
      A: "Tool",
      B: "Abstract idea",
      C: "Machine",
      D: "Drug"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "A theory is:",
    options: {
      A: "Guesswork",
      B: "Organized set of concepts",
      C: "Assumption",
      D: "Law"
    },
    answer: "B",
    type: "mcq"
  },

  {
    question: "Nurses must promote health, prevent illness, restore health and ____ suffering.",
    answer: "Alleviate",
    type: "fill"
  },
  {
    question: "The legal rights of patients are stated in the ____.",
    answer: "Patient’s Bill of Rights",
    type: "fill"
  },
  {
    question: "When ethics and law conflict, an action may be ethical but ____.",
    answer: "Illegal",
    type: "fill"
  },
  {
    question: "Failure to meet standards of practice is called ____.",
    answer: "Negligence",
    type: "fill"
  },

  {
    question: "Nursing models help nurses to:",
    options: {
      A: "Sleep early",
      B: "Organize care",
      C: "Ignore patients",
      D: "Focus on drugs"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Orem’s theory emphasizes:",
    options: {
      A: "Environment",
      B: "Self-care",
      C: "Culture",
      D: "Anatomy"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Roy’s Adaptation Model views man as:",
    options: {
      A: "Isolated",
      B: "Passive",
      C: "Adaptive system",
      D: "Dependent"
    },
    answer: "C",
    type: "mcq"
  },
  {
    question: "Watson’s theory emphasizes:",
    options: {
      A: "Caring",
      B: "Machines",
      C: "Surgery",
      D: "Drugs"
    },
    answer: "A",
    type: "mcq"
  },
  {
    question: "Nursing theory improves practice by:",
    options: {
      A: "Removing standards",
      B: "Guiding decisions",
      C: "Hiding knowledge",
      D: "Promoting uncertainty"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "A model in nursing is:",
    options: {
      A: "Framework for practice",
      B: "Equipment",
      C: "Medicine",
      D: "Diagnosis"
    },
    answer: "A",
    type: "mcq"
  },
  {
    question: "The nursing process is:",
    options: {
      A: "Random",
      B: "Systematic",
      C: "Emotional",
      D: "Punitive"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "The first step in nursing process is:",
    options: {
      A: "Planning",
      B: "Assessment",
      C: "Evaluation",
      D: "Discharge"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Diagnosis in nursing involves:",
    options: {
      A: "Medical interpretation",
      B: "Identifying patient problems",
      C: "Performing surgery",
      D: "Prescribing drugs"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Planning in nursing process involves:",
    options: {
      A: "Guessing",
      B: "Setting goals",
      C: "Arguing",
      D: "Discharging"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Implementation involves:",
    options: {
      A: "Doing planned interventions",
      B: "Diagnosing",
      C: "Writing theory",
      D: "Research"
    },
    answer: "A",
    type: "mcq"
  },
  {
    question: "Evaluation determines:",
    options: {
      A: "Patient’s age",
      B: "Goal achievement",
      C: "Nurse’s salary",
      D: "Doctor’s performance"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Communication is essential because it:",
    options: {
      A: "Creates conflict",
      B: "Enhances understanding",
      C: "Leads to noise",
      D: "Promotes errors"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Purpose of communication in nursing:",
    options: {
      A: "Gossip",
      B: "Therapeutic interaction",
      C: "Commanding",
      D: "Entertainment"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Philosophy is derived from two Greek words meaning ____ and ____.",
    answer: "Love and wisdom",
    type: "fill"
  },
  {
    question: "Florence Nightingale emphasized the role of the ____ in healing.",
    answer: "Environment",
    type: "fill"
  },
  {
    question: "A personal belief about worth is called a ____.",
    answer: "Value",
    type: "fill"
  },

  {
    question: "Active listening includes:",
    options: {
      A: "Interrupting",
      B: "Avoiding eye contact",
      C: "Paying attention",
      D: "Sleeping"
    },
    answer: "C",
    type: "mcq"
  },
  {
    question: "A barrier to communication is:",
    options: {
      A: "Empathy",
      B: "Noise",
      C: "Understanding",
      D: "Clarity"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Interpersonal relationship in nursing involves:",
    options: {
      A: "Withdrawal",
      B: "Therapeutic engagement",
      C: "Anger",
      D: "Avoidance"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Infection control reduces:",
    options: {
      A: "Recovery",
      B: "Transmission of disease",
      C: "Immunity",
      D: "Hydration"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Chain of infection includes all EXCEPT:",
    options: {
      A: "Causative agent",
      B: "Reservoir",
      C: "Portal of entry",
      D: "Immunization"
    },
    answer: "D",
    type: "mcq"
  },
  {
    question: "Handwashing is:",
    options: {
      A: "Secondary prevention",
      B: "Primary prevention",
      C: "Tertiary",
      D: "Psychological"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "PPE includes all EXCEPT:",
    options: {
      A: "Gloves",
      B: "Masks",
      C: "Apron",
      D: "Curtains"
    },
    answer: "D",
    type: "mcq"
  },
  {
    question: "Breaking chain of infection:",
    options: {
      A: "Dropping waste",
      B: "Sterilization",
      C: "Sharing needles",
      D: "Ignoring hygiene"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Health education enables clients:",
    options: {
      A: "Confused",
      B: "Informed decisions",
      C: "Stay ignorant",
      D: "Avoid nurses"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "First step in health education:",
    options: {
      A: "Evaluation",
      B: "Assessment of needs",
      C: "Testing",
      D: "Punishment"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Goal of health education:",
    options: {
      A: "Worsening disease",
      B: "Behavior change",
      C: "Mortality",
      D: "Hiding information"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Therapeutic relationship based on:",
    options: {
      A: "Empathy",
      B: "Anger",
      C: "Judgment",
      D: "Hostility"
    },
    answer: "A",
    type: "mcq"
  },
  {
    question: "Non-verbal communication includes:",
    options: {
      A: "Speech",
      B: "Touch",
      C: "Lectures",
      D: "Notes"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Standard precautions applied to:",
    options: {
      A: "Only HIV",
      B: "All patients",
      C: "Children",
      D: "Elderly"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Pain is:",
    options: {
      A: "Objective",
      B: "What patient says",
      C: "A lie",
      D: "Only physical"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Acute pain lasts:",
    options: {
      A: "Days–weeks",
      B: "Months–years",
      C: "Forever",
      D: "Minutes"
    },
    answer: "A",
    type: "mcq"
  },
  {
    question: "Gate control theory explains:",
    options: {
      A: "Cardiac pain",
      B: "Pain modulation",
      C: "Kidney pressure",
      D: "Surgery"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Stress is:",
    options: {
      A: "Always harmful",
      B: "Response to demands",
      C: "Only emotional",
      D: "Only physical"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Adaptation is:",
    options: {
      A: "Failure",
      B: "Adjusting",
      C: "Sleeping",
      D: "Ignoring"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Coping mechanism:",
    options: {
      A: "Violence",
      B: "Manage stress",
      C: "Addiction",
      D: "Anger"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Sexuality involves:",
    options: {
      A: "Reproduction",
      B: "Physical/emotional/social identity",
      C: "Intercourse",
      D: "Gender only"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Gender refers to:",
    options: {
      A: "Biological sex",
      B: "Social roles",
      C: "Chromosomes",
      D: "Women"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Nurses handle sexuality with:",
    options: {
      A: "Judgment",
      B: "Cultural sensitivity",
      C: "Anger",
      D: "Fear"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Pain assessment includes:",
    options: {
      A: "Guessing",
      B: "Standardized scales",
      C: "Ignoring report",
      D: "Forcing speech"
    },
    answer: "B",
    type: "mcq"
  },
    {
    question: "Values are formed through modelling, moralizing and ____.",
    answer: "Reward and punishment",
    type: "fill"
  },
  {
    question: "Naturalism believes reality is based on ____.",
    answer: "Nature",
    type: "fill"
  },
  {
    question: "Idealism views reality as rooted in ideas and ____ experiences.",
    answer: "Subjective",
    type: "fill"
  },
  {
    question: "Pragmatism determines truth based on ____ consequences.",
    answer: "Practical",
    type: "fill"
  },
  {
    question: "Humanism places priority on ____ beings.",
    answer: "Human",
    type: "fill"
  },
  {
    question: "Existentialism emphasizes freedom of choice and personal ____.",
    answer: "Responsibility",
    type: "fill"
  },
  {
    question: "Nursing philosophy defines beliefs about people, health, environment and ____.",
    answer: "Nursing",
    type: "fill"
  },
  {
    question: "Ethics is the science of ____.",
    answer: "Morals",
    type: "fill"
  },
  {
    question: "Confidentiality protects ____ information.",
    answer: "Personal",
    type: "fill"
  },
  {
    question: "Every patient has the right to considerate and respectful ____.",
    answer: "Care",
    type: "fill"
  },
  {
    question: "Consent is waived during ____ situations.",
    answer: "Emergency",
    type: "fill"
  },
  {
    question: "Nurses must promote health, prevent illness, restore health and ____ suffering.",
    answer: "Alleviate",
    type: "fill"
  },
  {
    question: "The legal rights of patients are stated in the ____.",
    answer: "Patient’s Bill of Rights",
    type: "fill"
  },
  {
    question: "When ethics and law conflict, an action may be ethical but ____.",
    answer: "Illegal",
    type: "fill"
  },
  {
    question: "Failure to meet standards of practice is called ____.",
    answer: "Negligence",
    type: "fill"
  },
  {
    question: "Threatening a procedure without consent is called ____.",
    answer: "Assault",
    type: "fill"
  },
  {
    question: "Touching a patient without consent is ____.",
    answer: "Battery",
    type: "fill"
  },
  {
    question: "A concept is an abstract mental formulation of an ____.",
    answer: "Object or phenomenon",
    type: "fill"
  },
  {
    question: "A theory is a structured set of concepts explaining a ____.",
    answer: "Phenomenon",
    type: "fill"
  },
  {
    question: "Watson’s theory focuses on ____.",
    answer: "Caring",
    type: "fill"
  },
  {
    question: "The systematic method in nursing practice is the ____.",
    answer: "Nursing process",
    type: "fill"
  },
  {
    question: "The first step in the nursing process is ____.",
    answer: "Assessment",
    type: "fill"
  },
  {
    question: "Nursing diagnosis identifies responses to actual or ____ problems.",
    answer: "Potential",
    type: "fill"
  },
  {
    question: "Implementation is when planned ____ are carried out.",
    answer: "Interventions",
    type: "fill"
  },
  {
    question: "Evaluation determines if patient ____ were achieved.",
    answer: "Goals",
    type: "fill"
  },
  {
    question: "Therapeutic communication promotes patient ____.",
    answer: "Well-being",
    type: "fill"
  },
  {
    question: "Non-verbal communication includes ____ expressions.",
    answer: "Facial",
    type: "fill"
  },
  {
    question: "The chain of infection begins with the ____ agent.",
    answer: "Causative",
    type: "fill"
  },
  {
    question: "Hand hygiene breaks the ____ of infection.",
    answer: "Chain",
    type: "fill"
  },
  {
    question: "An object free from microorganisms is ____.",
    answer: "Sterile",
    type: "fill"
  },
  {
    question: "Health education aims for sustained ____ change.",
    answer: "Behaviour",
    type: "fill"
  },
  {
    question: "Pain is whatever the ____ says it is.",
    answer: "Patient",
    type: "fill"
  },
  {
    question: "Acute pain lasts less than ____ months.",
    answer: "Three",
    type: "fill"
  },
  {
    question: "Stress is the body’s response to any demand or ____.",
    answer: "Stressor",
    type: "fill"
  },
  {
    question: "Sexuality includes physical, emotional, social and ____ aspects.",
    answer: "Psychological",
    type: "fill"
  },

  {
    question: "Human rights in nursing practice include:",
    options: {
      A: "The right to abuse",
      B: "Right to privacy & dignity",
      C: "Right to inject without consent",
      D: "Right to deny information"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Ethical decision-making is influenced by:",
    options: {
      A: "Personal values",
      B: "Gossip",
      C: "Wealth",
      D: "Politics"
    },
    answer: "A",
    type: "mcq"
  },
  {
    question: "A philosophy of nursing helps a nurse to:",
    options: {
      A: "Avoid patients",
      B: "Reflect on purpose of practice",
      C: "Ignore society",
      D: "Reduce workload"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Modeling in value formation includes:",
    options: {
      A: "Rewards",
      B: "Copying admired behavior",
      C: "Punishment",
      D: "Laws"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "Ethical issues in nursing involve:",
    options: {
      A: "Gossiping",
      B: "Judging patients",
      C: "Morally right actions",
      D: "Social media"
    },
    answer: "C",
    type: "mcq"
  },
  {
    question: "Autonomy refers to:",
    options: {
      A: "Nurse making decisions for patients",
      B: "Patient's right to decide",
      C: "Government influence",
      D: "Hospital rules only"
    },
    answer: "B",
    type: "mcq"
  },
  {
    question: "A nurse violates ethics when she:",
    options: {
      A: "Maintains confidentiality",
      B: "Respects privacy",
      C: "Discloses private information",
      D: "Gives education"
    },
    answer: "C",
    type: "mcq"
  },
  {
    question: "The Patients’ Bill of Rights includes:",
    options: {
      A: "Right to punishment",
      B: "Right to privacy",
      C: "Right to force treatment",
      D: "Right to mistreat staff"
    },
    answer: "B",
    type: "mcq"
  },
  
];

export default QUESTIONS;
