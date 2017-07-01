def optimal_cut?(int1, int2, multiplier1, multiplier2)
    int1 * multiplier1 + int2 * (multiplier2 + 1) > int2 * multiplier2 + int1 * (multiplier1 + 1)
end

def cutBoard(arr1, arr2)
  arr1 = arr1.map {|el| el.to_i}
    .sort!.reverse!
  arr2 = arr2.map {|el| el.to_i}
    .sort!.reverse!
  verticalSegments = horizontalSegments = 1
  totalCost = i = j = 0

  while i < arr1.length && j < arr2.length
    if optimal_cut?(arr1[i], arr2[j], verticalSegments, horizontalSegments)
      totalCost += arr2[j] * horizontalSegments
      j += 1
      verticalSegments += 1
    else
      totalCost += arr1[i] * verticalSegments
      i += 1
      horizontalSegments += 1
    end
  end

  totalCost += arr1[i..-1].reduce(0) { |acc, curr| acc + curr * verticalSegments }
  totalCost += arr2[j..-1].reduce(0) { |acc, curr| acc + curr * horizontalSegments }
  totalCost % (10 ** 9 + 7)
end
