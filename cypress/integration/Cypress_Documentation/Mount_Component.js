import TodoList from './components/TodoList'
describe('Cypress Documentation - Cypress Overview - Component Test', function(){

    it('contains the correct number of todos', () => {
        const todos = [
          { text: 'Buy milk', id: 1 },
          { text: 'Learn Component Testing', id: 2 },
        ]
      
        cy.mount(<TodoList todos={todos} />)
        // the component starts running like a mini web app
        cy.get('[data-testid="todos"]').should('have.length', todos.length)
      })

  })