"use client"

import { useState } from "react"

export default function AddItemExample() {
  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState<string[]>([])

  function handleAdd() {
    if (!inputValue.trim()) {
        setInputValue("")
        return
    }

    setItems([...items, inputValue])
    setInputValue("")
  }

  return (
    <div className="space-y-4 max-w-sm">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter something"
        className="w-full rounded border px-3 py-2"
      />

      <button
        onClick={handleAdd}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        Add
      </button>

      {/* Display added items */}
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="rounded bg-gray-100 px-3 py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
