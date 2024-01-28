# Logisim block properties

All the elements of a Logisim circuit can be considered as individual objects. An `AND` gate is one object, an input is another.

**These objects have properties** that allow Logisim to better follow the user's intention.

## Example 1 : the `AND` gate with 24 inputs

Suppose we have 24 input bits. We want to check that all these bits are `1`.

We could of course use multiple `AND` gates and link them together to achieve the desired result, but this solution is long and tedious to implement.

Another solution is to rely on the properties of our `AND` gate.

In particular, these properties allow us to modify the number of inputs that the `AND` gate accepts, which can produce some rather funny results visually speaking :

![`An animation of an AND gate with 24 inputs should be displayed here`](/logisim/images/logisim-properties-and-24-inputs.gif)

> [!NOTE]
> The number of inputs is by far not the only interesting property of AND gates. Experimenting with them gives you a better understanding of what each one represents.

## Example 2 : Creating bit vectors

After the start of the semester, a single bit of input will no longer suffice. Some inputs will be more than one bit in size, and you'll have to work with that.

Creating a multi-bit input follows much the same process as creating a 24-input `AND` gate :

![`An animation of an 8-bit input should appear here`](/logisim/images/logisim-properties-8-bits-input.gif)

The process is exactly the same for a multi-bit output.

> [!NOTE]
> Bit vectors will be discussed in more detail in the [Splitter tutorial](splitter).

### Modifying a multi-bit input

The hand tool works in exactly the same way on multi-bit inputs :

![`An animation of modifying a multi-bit input should be displayed here`](/logisim/images/logisim-properties-hand-multibit-inputs.gif)

### Input representation

Sometimes bits are used to represent more than just `1` and `0`. It is possible to display an input differently, still using its properties :

![`A change of representation animation should be displayed here`](/logisim/images/logisim-properties-bits-representations.gif)

## Example 3 : Using an `AND` gate on bit vectors

Sometimes you want to **perform bit-by-bit operations on bit vectors** (you take the first two bits and perform the operation on them, the second two bits, etc...).

Properties can also be used to do this. Let's take the example of a bit-by-bit `AND` :

![`An animation of a bit-by-bit AND operation should be displayed here`](/logisim/images/logisim-properties-bit-by-bit-operations.gif)

Note that intially, **an error is present**. A normal `AND` gate cannot be used with bit vectors. It must be modified to accept input vectors of a certain size.

> [!NOTE]
> You can also combine examples 1 and 3 to get an `AND` gate taking 5 inputs of 8 bits each, for example.

## Appendix

The project used to image this tutorial can be downloaded from ## Appendice

Le projet utilisé pour imager ce tutoriel peut être téléchargé via <a href="/logisim/projects/logisim_blocks_use_object_properties.circ" download="logisim_blocks_use_object_properties.circ">this link</a>.