# Patterns

## Pattern: Proof-forward portfolio sequence

**Description**: Moves from a concise positioning hero to capabilities, working method, quantified
proof, career depth, independent business experience, personal context, and contact.

**Usage**: The single-page portfolio in `App.tsx`.

**Constraints**: Adjacent sections must use different layout families. Keep only three editorial
eyebrows across the seven-section page. Career detail beyond the three strongest outcomes is
progressively disclosed.

## Pattern: Hierarchy-led capability bento

**Description**: One dominant core-practice card establishes the main value proposition while
three compact supporting cards show platform, product, and business range.

**Usage**: `Capabilities.tsx` and `.capability-grid` styles.

**Constraints**: The dominant card is unique on the page. Mobile collapses to one column and
removes hover-only lighting on coarse pointers.

## Pattern: Editorial process rail

**Description**: A real four-step sequence presented as a continuous bordered rail rather than
four interchangeable cards.

**Usage**: `Process.tsx` and `.smooth-stepper` styles.

**Constraints**: Preserve ordered-list semantics. Collapse to two columns on tablet and one on
mobile without changing step order.
