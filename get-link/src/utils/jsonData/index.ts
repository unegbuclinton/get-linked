export const FAQ: Array<{ question: string; answer: string }> = [
  {
    question: 'Can I work on a project I started before the hackathon?',
    answer:
      'Can I work on a project I started before the hackathon?Can I work on a project I started before the hackathon?',
  },
  {
    question: 'What happens if I need help during the hackathon?',
    answer:
      'Can I work on a project I started before the hackathon?Can I work on a project I started before the hackathon?',
  },
  {
    question: 'What happens if I dont have an idea for a project?',
    answer:
      'Can I work on a project I started before the hackathon?Can I work on a project I started before the hackathon?',
  },
  {
    question: 'Can I join a team or do I have to come with one?',
    answer:
      'Can I work on a project I started before the hackathon?Can I work on a project I started before the hackathon?',
  },
  {
    question: 'What happens after the hackathon ends',
    answer:
      'Can I work on a project I started before the hackathon?Can I work on a project I started before the hackathon?',
  },
  {
    question: 'Can I work on a project I started before the hackathon?',
    answer:
      'Can I work on a project I started before the hackathon?Can I work on a project I started before the hackathon?',
  },
]

export const criteriaInfo: Array<{ preamble: string; text: string }> = [
  {
    preamble: ' Innovation and Creativity',
    text: 'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.',
  },
  {
    preamble: 'Functionality',
    text: ' Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.',
  },
  {
    preamble: ' Impact and Relevance',
    text: 'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.',
  },

  {
    preamble: 'Technical Complexity',
    text: 'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.',
  },

  {
    preamble: 'Adherence to Hackathon Rules',
    text: 'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.',
  },
]

export const navMenuItems: Array<{
  text: string
  to: string
  offset?: number
  link: string
}> = [
  { text: 'Timeline', offset: -100, to: 'timeline', link: '' },
  { text: 'Overview', offset: -100, to: 'overview', link: '' },
  { text: 'FAQs', offset: -100, to: 'faq', link: '' },
  { text: 'Contact', link: '/contact', to: '' },
]

export const categoty: Array<{ value: string; label: string }> = [
  { value: 'Frontend', label: 'Frontend' },
  { value: 'Backend', label: 'Backend' },
  { value: 'Design', label: 'Design' },
  { value: 'PM', label: 'PM' },
]

export const size: Array<{ value: string; label: string }> = []

for (let i = 1; i <= 10; i++) {
  size.push({ value: `${i}`, label: `${i}` })
}
