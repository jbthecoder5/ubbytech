class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :phonenumber
      t.string :company
      t.string :company_type
      t.text :description

      t.timestamps
    end
  end
end
